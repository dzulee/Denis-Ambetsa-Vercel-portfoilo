/* global ContentService, GmailApp, PropertiesService, SpreadsheetApp, UrlFetchApp */

/**
 * Google Apps Script endpoint for the contact form.
 * Deploy this file as a web app and use its /exec URL as VITE_CONTACT_SCRIPT_URL.
 */
// eslint-disable-next-line no-unused-vars
function doPost(e) {
  var params = e && e.parameter ? e.parameter : {};
  var submission = {
    name: params.name || '',
    phone: params.phone || '',
    email: params.email || '',
    subject: params.subject || '',
    message: params.message || ''
  };

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getActiveSheet().appendRow([
    submission.name,
    submission.phone,
    submission.email,
    submission.subject,
    submission.message
  ]);

  var results = {
    email: sendEmailNotification(submission),
    whatsapp: sendWhatsAppNotification(submission)
  };

  return ContentService
    .createTextOutput(JSON.stringify({ success: results.email || results.whatsapp, results: results }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendEmailNotification(submission) {
  try {
    var recipient = 'dennisambetsa63@gmail.com';
    var subject = 'New Contact Form Submission: ' + submission.subject;
    var htmlBody = '<div style="font-family:Arial,sans-serif;padding:20px;max-width:600px;border:1px solid #cbd5e1;border-radius:8px;">' +
      '<h2 style="color:#1e293b;margin-top:0;">New Message Received</h2>' +
      '<p><strong>From:</strong> ' + escapeHtml(submission.name) + ' (' + escapeHtml(submission.email) + ')</p>' +
      '<p><strong>Phone:</strong> ' + escapeHtml(submission.phone) + '</p>' +
      '<p><strong>Subject:</strong> ' + escapeHtml(submission.subject) + '</p>' +
      '<div style="background:#f8fafc;padding:15px;border-left:4px solid #f59e0b;border-radius:4px;margin-top:15px;min-height:80px;">' +
      '<p style="margin:0;white-space:pre-wrap;color:#334155;">' + escapeHtml(submission.message) + '</p>' +
      '</div></div>';

    var options = { htmlBody: htmlBody };
    if (submission.email.trim() !== '') {
      options.replyTo = submission.email;
    }

    GmailApp.sendEmail(recipient, subject, buildPlainText(submission), options);
    return true;
  } catch (error) {
    console.error('Email notification failed: ' + error);
    return false;
  }
}

function sendWhatsAppNotification(submission) {
  var apiKey = PropertiesService.getScriptProperties().getProperty('CALLMEBOT_API_KEY');
  if (!apiKey) {
    console.error('CALLMEBOT_API_KEY is not configured in Script Properties.');
    return false;
  }

  var message = 'New Website Submission\n\n' +
    'Name: ' + submission.name + '\n' +
    'Phone: ' + submission.phone + '\n' +
    'Email: ' + submission.email + '\n' +
    'Subject: ' + submission.subject + '\n\n' +
    'Message:\n' + submission.message;
  var url = 'https://api.callmebot.com/whatsapp.php?phone=254769579340' +
    '&text=' + encodeURIComponent(message) +
    '&apikey=' + encodeURIComponent(apiKey);

  try {
    var response = UrlFetchApp.fetch(url, { method: 'get', muteHttpExceptions: true });
    var statusCode = response.getResponseCode();
    var responseBody = response.getContentText();
    console.log('CallMeBot response (' + statusCode + '): ' + responseBody);

    if (statusCode < 200 || statusCode >= 300 || /error|invalid|failed|denied/i.test(responseBody)) {
      console.error('WhatsApp notification was rejected. HTTP ' + statusCode + ': ' + responseBody);
      return false;
    }
    return true;
  } catch (error) {
    console.error('WhatsApp notification failed: ' + error);
    return false;
  }
}

function buildPlainText(submission) {
  return 'Name: ' + submission.name + '\n' +
    'Phone: ' + submission.phone + '\n' +
    'Email: ' + submission.email + '\n' +
    'Subject: ' + submission.subject + '\n\n' +
    'Message:\n' + submission.message;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
