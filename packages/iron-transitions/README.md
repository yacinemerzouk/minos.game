Page Transitions For Meteor Iron Router
=======================================

## VelocityJS page transitions

This package - meteorhubdotnet:iron-transitions - adds native-feeling page transitions to your Meteor app; built on [VelocityJS](http://julian.com/research/velocity/), [Momentum](https://github.com/percolatestudio/meteor-momentum), and [Iron Router](http://eventedmind.github.io/iron-router/).

##### Page transitions

The default page transition is `iron-transition-fade`.

Wrap all of the page content in a div with the `.content` class.

For right-to-left page transitions, add the `.iron-transition-right` class.

For left-to-right page transitions, add the `.iron-transition-left` class.

##### Layout Template

Wrap the Iron Router's `yield` helper with the `momentum` helper:
```
{{#momentum plugin='iron-router' options=transition}}
  {{>yield}}
{{/momentum}}
```

For UI elements that should not be animated during page transitions, like a header navbar or footer menu, you can add extra template below the `yield` helper:
```
{{#momentum plugin='iron-router' options=transition}}
  {{>yield}}
  {{>myFooterTemplateName}}
{{/momentum}}
```

##### Template Events & Helpers

To hook up meteorhubdotnet:iron-transitions's helpers and events to your Meteor app, add following code to your layout template:
```
Template.INSERT_YOUR_TEMPLATE_LAYOUT_NAME_HERE.events(IronTransitions.events);
Template.myLayoutTemplateName.helpers(IronTransitions.helpers);
```

##### Previous Page Helper

To create a back button or link use `getPreviousPage` helper. Example:
```
<a href="{{getPreviousPage}}">Back</a>
```

