import React from 'react';
import youtubeIcon from '../assets/youtube-brands-solid-full.svg';
import XIcon from '../assets/x-twitter-brands-solid-full.svg';
import facebookIcon from '../assets/facebook-brands-solid-full.svg';
import discordIcon from '../assets/discord-brands-solid-full.svg';
import whatsappIcon from '../assets/whatsapp-brands-solid-full.svg';
import linkedinIcon from '../assets/linkedin-in-brands-solid-full.svg';
import githubIcon from '../assets/github-brands-solid-full.svg';
import mailIcon from '../assets/m-solid-full.svg';


const icons=[
     {
        name: "WhatsApp",
        link: "https://wa.me/254799964580",
        socialIcon: whatsappIcon
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/denis-ambetsa/",
        socialIcon: linkedinIcon
    },
     {
        name: "E-Mail",
        link: "mailto:denis.ambetsa63@gmail.com",
        socialIcon: mailIcon 
    },
    {
        name: "GitHub",
        link: "https://github.com/dzulee",
        socialIcon: githubIcon
    },
    {
        name: "X",
        link: "https://x.com/ambetsa_dennis",
        socialIcon: XIcon // Removed extra curly braces
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61587463236155",
        socialIcon: facebookIcon
    },
    {
        name: "Youtube",
        link: "https://www.youtube.com/@dennisambetsa1588",
        socialIcon: youtubeIcon
    },      
    
    
     {
        name: "Discord",
        link: "https://discord.com/users/1347999417046663262",
        socialIcon: discordIcon 
    }

]


export function SocialIcons({ limit,fromEnd = false }){
    const displayedIcons = limit 
        ? (fromEnd ? icons.slice(-limit) : icons.slice(0, limit)) 
        : icons;
    return(
        <div>
             <div className='d-flex justify-content-space-between social-icons'style={{padding:"10px 10px",gap:"30px"}}>
                {displayedIcons.map((icon) =>(
                    <div className=''  key={icon.name}>
                                    <ul className="list-unstyled gap-2">
                                        <li>
                                            <a href={icon.link} target="_blank" rel="noreferrer">
                                                <img src={icon.socialIcon} 
                                                className=" border rounded-3 shadow-sm p-2 bg-white"
                                                alt={icon.name} style={{color:'red'}} 
                                                  />
                                            </a>
                                        </li>                                  
                                    </ul>
                         </div>
                ))}
                 </div>

        </div>






    )



}