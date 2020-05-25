import React from 'react';
import classes from './Button.module.css'

const button = (props) => (
    <div className={classes.Button}>
        <img src={props.image} alt={props.alt} onClick={props.clicked} />
        {/* RE: using an img tag as a button
          Tricky subject! Just giving an onClick event to an element isn't enough to really make it a button. It's functional,
          but has some usability issues for all users (and is entirely broken from an a11y perspective). I'm going to list every
          problem that I can think of off the top of my head, along with solutions to each. To be clear up front though, almost
          every single one of these issues is solved for free by just using a button tag.

          This is going to be a long list, so for once I'm going to try to not explain every single thing I bring up. Google or
          ask for clarification if I refer to something unfamiliar!

          - no mouse over indication of interactivity. By default, interactive elemets respond to mouse over in at least one way,
          usually two (e.g. buttons darken and the cursor becomes a pointer, links change colour, underline, and the cursor becomes
          a pointer, etc.)
            - can set hover-state stylings in css with the `:hover` pseudo selector
            - can control the state the cursor takes while hovering over an element with the `cursor` style prop (usually in the
            hover styles, but anywhere's fine)
          - img tags can't take focus by default. An interactive element usually receives focus after being clicked (indicated in 
          Chrome by a blue border), but that's not the important part. This is actually another a11y issue. Go read up on "keyboard
          navigation", give it a try on somewhere like GitHub, then try on your site.
            - elements that can't recevie focus by default can be forced to take focus with the attribute `tab-index=0` but you
            should read up on keyboard navigation, and probably the tab-index attribute itself, before you use it
          - once it can receive focus, an interactive element should also indicate that it is interactive to keyboard navigators
          by changing style
            - generally, you just add a second selector for `:focus` along with the selector using `:hover`
            - side note, this is why there's always a second style change on top of the cursor becoming a pointer, because a
            keryboard user will effectively not have a pointer to communicate interactivity through
          - a keyboard user will be unable to trigger the onClick
            - need to fire a key event. These are a bit of a headache. You've got `onKeyPress`, `onKeyDown`, and `onKeyUp`. Look 
            up the differences, but you're generally going to want `onKeyDown`. On top of that, this will fire for any key press,
            but a keyboard navigator only expects to interact with the button on a space or enter. In your event handler, you
            have to check the key code property of the event object to figure out if the key was a space or enter
            - going to reiterate that this is something you get for free on an actual button element. If you give a button an 
            onClick then, with no additional work, the button will also interpret spaces and enter key presses (while it has focus)
            as if they were clicks. HTML standards stuff
          - a screen reader won't know it's a button. Different sort of a11y problem from keyboard navigation. Screen readers
          rely on "semantic HTML" to know what's what while interpetting HTML as text. The hover/focus styling or event on an
          element doesn't matte to it, just what the tag of the element actually is and what the semantic meaning of that tag
          is (as defined in the spec).
            - if you have a reason to use a non-button tag as a button, then you need to use the `aria-role="button"` attribute
            to communicate its role to a screen reader user
          - this may or may not be a problem, since you accept an alt text prop, but any time the direct child of a button element
          (or other tag acting as a button) is not text that clearly describes what the button will do, then the button should have
          an alt or title attribute containing an explanation of what will happen when it's activated. The alt is only for screen
          readers, but a title will also display for anyone who leaves focus on/hovers over the button for a brief period so it can
          often be useful to everyone to use a title (especially if the button is just an icon)
        */}
    </div>
)

export default button;