---
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: 'Biography '
colors: colors-b
backgroundImage:
  url: /images/sky.gif
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 80
sections:
  - type: HeroSection
    colors: colors-b
    title: >-
      I'm a developer, digital artist, consultant and a bunch of other
      impressive titles and buzz words.
    subtitle: >-
      This is my info—I'm sharing it all this with ya'll to impress you with all
      the hard work I've done in the past few years. Once you're impressed, you
      can continue to scroll down to see more details and credentials about me.
    text: ''
    actions: []
    media:
      type: ImageBlock
      url: /images/about.jpg
      altText: Hero image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
  - type: MediaGallerySection
    colors: colors-f
    title: ''
    subtitle: 'I worked with these folks:'
    images:
      - type: ImageBlock
        url: /images/logo1.svg
        altText: logo one
      - type: ImageBlock
        url: /images/logo2.svg
        altText: logo two
      - type: ImageBlock
        url: /images/logo3.svg
        altText: logo three
      - type: ImageBlock
        url: /images/logo4.svg
        altText: logo four
      - type: ImageBlock
        url: /images/logo5.svg
        altText: logo five
    columns: 5
    spacing: 16
    aspectRatio: '16:9'
    showCaption: true
    enableHover: false
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
  - type: FeaturedItemsSection
    colors: colors-f
    title: ''
    subtitle: 'You can find me here:'
    actions: []
    items:
      - type: FeaturedItem
        title: ''
        text: ''
        actions:
          - type: Link
            label: GitHub
            showIcon: false
            icon: ''
            url: 'https://github.com/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: ''
        text: ''
        actions:
          - type: Link
            label: Twitter
            showIcon: false
            icon: ''
            url: 'https://twitter.com/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: ''
        text: ''
        actions:
          - type: Link
            label: LinkedIn
            showIcon: false
            icon: ''
            url: 'https://www.linkedin.com/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: ''
        text: ''
        actions:
          - type: Link
            label: CodePen
            showIcon: false
            icon: ''
            url: 'https://codepen.io/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: ''
        text: ''
        actions:
          - type: Link
            label: Discord
            showIcon: false
            icon: ''
            url: 'https://discord.com/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: ''
        text: ''
        actions:
          - type: Link
            label: Instagram
            showIcon: false
            icon: ''
            url: 'https://www.instagram.com/'
        styles:
          self:
            textAlign: left
    columns: 3
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: flex-start
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
  - type: LabelsSection
    title: 'Skills:'
    colors: colors-f
    items:
      - type: Label
        label: 'WEB 1, 2, 3'
      - type: Label
        label: React
      - type: Label
        label: Microsoft Office
      - type: Label
        label: Next.js
      - type: Label
        label: Stackbit
      - type: Label
        label: Pancakes
      - type: Label
        label: C++
      - type: Label
        label: Swift
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
  - type: ContactSection
    colors: colors-f
    title: Got an interesting project? Tell me more...
    text: ''
    form:
      type: FormBlock
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: false
          width: 1/2
        - type: TextFormControl
          name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Tell me about your project
          hideLabel: true
          placeholder: Tell me about your project
          isRequired: true
          width: full
      submitLabel: Submit
      styles:
        submitLabel:
          textAlign: center
    media: null
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
layout: PageLayout
---