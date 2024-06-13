import { Component } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  standalone: true,
  selector: 'app-policies',
  template: `
    <app-page-header pageName="Policies"></app-page-header>
    <section class="section-wrapper">
      <h1>AdventureCon Policies</h1>
      <p>
        AdventureCon holds these policies in effect, and they apply to all attendees at AdventureCon Events and to anyone that enters the AdventureCon Event areas.
      </p>

      <h2><strong>Privacy Policy</strong></h2>
      <p>
        AdventureCon respects your privacy. All information supplied with AdventureCon through the badge purchase process will only be used for registration verification, and communication regarding AdventureCon events.
      </p>

      <h2><strong>Media and Publicity</strong></h2>
      <div>
        <p>
          AdventureCon reserves the right to use photographs and video taken at AdventureCon events without the express permission of those included in the photograph/video.
        </p>

        <p>
          AdventureCon may use the photograph/video in publications or other media material produced, used, or contracted by AdventureCon, including but not limited to brochures, invitations, books, newspapers, magazines, television, websites, etc.
        </p>

        <p>
          By participating in an AdventureCon event or by failing to notify AdventureCon in writing of your desire to not have your photograph used by AdventureCon, you are agreeing to release, defend, hold harmless, and indemnify AdventureCon from all claims involving the use of your picture or likeness.
        </p>

        <p>
          Any person or organization not affiliated with AdventureCon may not use, copy, alter, or modify AdventureCon photographs, graphics, videography, or other similar reproductions and recordings without the advance written permission of an authorized designee from AdventureCon.
        </p>
      </div>

      <h2><strong>Names</strong></h2>
      <div>
        <p>
          Names on badges must be a ‘real name’. This is not necessarily your legal name, but it should be the name that you commonly use. This is not your online alias, your social media account, or anything else of that nature. It does not need to be your full legal name, but it does need to be your name. Both a first and a last name are required.
        </p>

        <p>
          The name on your badge should be the one you use with coworkers, friends, your doctor, etc. Diminutives, derivatives, and long-established nicknames are all valid as long as they are what people use to address you in physical face-to-face spaces.
        </p>

        <p>
          We do not require you to use a "dead-name" publicly under any circumstances and will only ask for it where necessary to validate credit cards for payment purposes.
        </p>

        <p>
          AdventureCon reserves the right to disallow any names on badges that they feel are inappropriate or fail to meet these guidelines. These badges will be refunded without warning.
        </p>

        <div>
          <p>
            <u>Some examples:</u>
          </p>

          <p>
            If your name is Donald, acceptable names include Donny, Don, etc.
          </p>

          <p>
            If you go by your middle name, please use it as your ‘First Name’ for badge purposes.
          </p>

          <p>
            Even if you do answer to an ‘alias’ type name when used in some circles, please do not use these on your badge.
          </p>

          <p>
            While AdventureCon policy is that badge names should match names on Legal ID, this is not a strict requirement, and you can obtain your badge with your ticket receipt with no need to show ID. There is no requirement to register under a "dead-name."
          </p>

        </div>
      </div>

      <h2><strong>Attending Minors</strong></h2>
      <p>
        As with all attendees, we want everyone to enjoy the convention, and play together. All attendees over the age of 6 must have a badge. Children under the age of 12 must always be accompanied by a parent or legal guardian; minors age 12-17 must have a responsible guardian present at AdventureCon at all times.
      </p>

      <h2><strong>Buying and Selling, Demoing, or Advertising Policy</strong></h2>
      <div>
        <p>
          During AdventureCon events, you may sell games or products as a Vendor in the Vendor hall, by purchasing a vendor booth and badges. You may also sell games at the Live Flea Market event, and in the Game Swap room. Any other buying or selling of games or products is not allowed. Trading of games is allowed.
        </p>

        <p>
          Demoing your game is allowed if done as any pick-up game normally occurs during AdventureCon events where players come together and play in the open gaming areas. It is not allowed to “camp” or “reserve” a table to demo your game in the open gaming areas. If a game is not being played, then the table must be freed up so that attendees can use the table to play a game.
        </p>

        <p>
          No signs or displays are allowed in the public and open gaming areas of AdventureCon without written permission. Small signs that simply label your table while you are there, and do not impede sight-lines or disrupt traffic flow are allowed. Signs set up where you are not present are not allowed. No loud announcements regarding your company or products are allowed without written permission.
        </p>
      </div>

      <h2><strong>Waiver of Liability</strong></h2>
      <p>
        Anyone attending AdventureCon events or entering the AdventureCon event area releases AdventureCon from any liability for loss or damage to persons or property, infringement of any right, or any other claim or course of action of any kind and agrees to comply with all the rules and regulations of the Event. AdventureCon reserves the right to deny entry or remove from the Event facilities any person who in its sole and absolute discretion is not following AdventureCon Convention Policies.
      </p>

      <h2><strong>Anti-Harassment Policy</strong></h2>
      <div>
        <p>
          AdventureCon is dedicated to providing a harassment-free and inclusive experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, gender identity or religion. Therefore, we do not tolerate harassment of participants in any form. Please familiarize yourself with our definition of harassment, and what we expect of AdventureCon attendees.
        </p>

        <p>
          Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race, religion, or gender identity; sexual images in public spaces; deliberate intimidation; stalking; following; harassing photography or recording; inappropriate physical contact; and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.
        </p>

        <p>
          If you, as an attendee, feel harassed, you may inform the offender that you would like the harassing behavior to stop immediately. If you are not comfortable doing this, you may contact an AdventureCon staff member who will address the concern.
        </p>

        <p>
          Likewise, if you feel that someone else is being harassed, you may notify an AdventureCon staff member who will address the concern.
        </p>

        <p>
          If you, as an attendee, are asked to stop behaving in a way that is interpreted as harassment, you are expected to stop immediately. Arguing about the situation or trying to convince someone that your behavior is not harassment will not get you anywhere. Just stop. If you disagree that your behavior is harassment, that is fine, but the behavior should stop anyway.
        </p>

        <p>
          If anyone engages in harassing behavior, AdventureCon organizers may take any action they, in their sole discretion, deem appropriate, including warning the offender or expulsion with no refund.
        </p>

        <p>
          We expect participants to follow these rules.
        </p>
      </div>
      <h2><strong>Lost & Found Policy</strong></h2>
      <p>
        All items presumed to be lost or misplaced will be placed in the Lost and Found box located at the Registration Desk.
      </p>

      <p>
        All items remaining in the Lost and Found box at the closing of AdventureCon will become the property of AdventureCon.
      </p>

      <h2><strong>Food & Drink Policy</strong></h2>
      <p>AdventureCon's “Food and Drink Policy” is the same as the venue that the event is being conducted.</p>
    </section>
  `,
  imports: [
    PageHeaderComponent
  ],
  styles: `
    p {
      font-size: 14px;
      padding-bottom: .75rem;
    }

    .section-wrapper {
      padding: 1rem;
    }
  `
})
export class PoliciesComponent {

}
