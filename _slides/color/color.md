## Intro to Mapping Data
###Parsons: Journalism + Design
###[Web Coding for Interactive Design](https://github.com/auremoser/web-coding)
**[October 21th, 2015](http://areweinthefutureyet.com/)**

![Whale Hunt](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/whale.jpg)

* Harris, J., [_Whale Hunt_](http://thewhalehunt.org/whalehunt.html).
* Harris, J., [_I love your work_](http://iloveyourwork.net/).

Find this document here:

* Gist: <http://tinyurl.com/lang-color>

1. Color Basics
	+ Intro to color thinking
	+ - and + colors
2. Coloring with Data
	+ Considerations
	+ Accessibility
	+ Matching + Standardizing
3. Color Tools
4. Creating Style Guides
5. Resources


#### Color Basics

Color is a fairly subjective but important consideration for any visualization type, it's probably also the most fun from an art/design perspective, and probably the most challenging to get right from a communication perspective.

It's complicated, we're going to go over a few short objectives here:

* Learn to observe colors and recognize their characteristics as they complement visualizations
* Learn how colors combine and a bit about the color spectrum
* Learn some tools you can use to combine colors for the web, appropriately

![Schindler's list](http://i.huffpost.com/gen/1021359/images/o-SCHINDLERS-LIST-RED-COAT-GIRL-facebook.jpg)

#####Intro to color thinking

There are various approaches to the question of 'what is color?'. In art, [color](http://arthistory.about.com/cs/glossaries/g/c_color.htm) is defined as "the element of art that is produced when light striking an object is reflected back to the eye."

There are various properties that complement it, hue, intensity etc. But our approach to color is often defined by what is visible, and we will be defining it by computational considerations. 

![Dark Side of the Moon](https://s-media-cache-ak0.pinimg.com/originals/22/0a/bb/220abb9a96c411bfb2defda1bf858252.jpg)

Light passed through a prism produces a range of olors, you mix them together and you get white, if you remove colors, you get black.

![RYB](https://upload.wikimedia.org/wikipedia/commons/1/1f/Chromatography_1841_Field.png)

##### - and + colors

If you are mixing paint, and you mix all paint colors together you get black, if you mix all colors together in a programming language, you get white.

There are thus two ways to mix colors: addition and subtraction.

You might be familiar with the **RYB wheel**, based on Goethe's color theory, among others who have built upon it. 

![RYB](http://www.major-confusion.co.uk/tutorials/tut_images/_rgb_shade_colourwheel.png)
 
Colors combine here in a subtractive way, meaning that if you mix all colors together they will turn black (pignments will absorb light and reflect the remaining colors).

But computationally you might use the **RGB wheel**:

![RGB](http://www.major-confusion.co.uk/tutorials/tut_images/_rgb_tint_colourwheel.png)

Colors combine here in an additive way, meaning that if you mix all colors, the result will be white.

We work in both systems for the web, because we design things in an additive way, and then often want to kill trees and print them in a subtractive way. 

This issue has been solved by Adobe CS in some ways, so you can convert to a CMYK or print qual color scheme, and we're not going to totally get into it, but you might want to read up on this as you approach color choosing for newsroom stories.

#### Coloring with Data

##### Considerations
We've all seen color in psychology classes and probably in art or design theory; how colors combine or complement eachother on the web is a little different than all theory, but it's useful to review the exercise.

Here's an example of two images with some similar colors combined. Your eye struggles to see them, it's probably not a good comparison for diverging datasets:

![](http://assets.runemadsen.com/lies_color-656336f40b381d069597b3bb0f744b64.svg)

 The point is that the center color is actually the same, the ground on which it is based makes it look distinct.

 ![](http://images.runemadsen.com/1440x/itten_exchange2-e18896ea63b2570f24ce868640af63a3.jpg)

 The advantage of writing color into your code, with numbers and hex values (like `#f60`), is that you can make sure your color choices are authentic (numeric) and be strategic about their pairings without being weaked by your eyes' perception, and reflextive mixing.

 Another example, where perception can be deceptive:

 ![](http://assets.runemadsen.com/lies_contrast-aafeb06ee6b69f112abe734115cf61e3.svg)

 ![](http://images.runemadsen.com/1440x/itten_example2_removed-3647f5a05e16cedd55f8eef5b89f0407.jpg)

##### Accessibility

Accessibility is especially a consideration when you approach news stories. Your objective is to inform in building visualizations, so your color choices should seek to inform a maximum audience. You might try testing your color schemes for color blindness.

![](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/color/colorbrew.jpg)

In toold like [Color Brewer](http://colorbrewer2.org/), you can set palette generation to preference color-blind or print-friendly colors.


##### Matching and Standardizing

Complementary colors are colors that are accross eachother on the color wheel. You can test this by staring at a color for a long time and closing your eyes to see what color is the "residue" you view in your eyelids.

You can choose one color and two subdued colorly like black/white to highlight something of pertinence.

![](http://images.runemadsen.com/1440x/vitaminwater-f707011dbe764deb074e00b39e858c47.jpg)

There are ways to organize things that are trending and beautiful with an economy on color.

![](https://s-media-cache-ak0.pinimg.com/736x/e1/d0/d9/e1d0d9a2d40db13e30a2682e9125f856.jpg)

However, colors for visualizations have meaning, and if you are building comparisons, you can do damage in using only the same colors.

![](http://images.runemadsen.com/1440x/bad_mono-746f3c1d5f85542436a302e72f3053c5.jpg)

For the web, you'll often see colors in the following formats:

* RGB | `rgb(255,102,0)` - _proportions of red, green, blue_
* Hex | `#ff6600`
* HSL | `hsl(24,100%,50%)` - _hue, saturation, lightness_

![f60](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/color/f60.jpg)

#### Color Tools

Complementary but distinct color schemes are often best for visualizations and there are a few tools that will help you generate palettes for this.

1. [Color Brewer](http://colorbrewer2.org/)

Will let you generate color-blind safe, print-worthy, map-ready palettes based on extensive research on their end.

![brew](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/color/colorbrew.jpg)

2. [Color Hexa](http://www.colorhexa.com/)

A mega tool for generating complementary, analgous, monochromatic, tetradic and other color palettes, and they provide preview tools to see how they will display on the web. 

![colorhexa](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/color/colorhexa.jpg)

3. [Color Lovers](http://www.colourlovers.com/) 

A palette-sharing social network that often pairs palettes with an inspiration image.

![colorlove](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/color/colorlove.jpg)

4. [Color Zilla](http://www.colorzilla.com/chrome/)

An extension for various browsers that allows you to pick colors from a page or extract them from images and gives you the hex/rgb values for those.

![colorzilla](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/color/colorzilla.jpg)

5. [Flat UI Colors](http://flatuicolors.com/)

A trendy palette with color values generated in the Hex, RBG, and RGBA (for "alpha blending" often translated as "opacity") scale.

![flat](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/color/flat.jpg)


#### Creating Style Guides

For generating a style guide (which is part of this week's assignment), consider all of these tools and come up with a color palette, fonts, and sketches that help you communicate your story agreeably, with some design program behind it.

Consider other visualizations and whether their palette complemented or distracted from the story they wanted to tell. 

Here are some tools for generating style guides in code:

* [Moodboard Generator](http://www.gomoodboard.com/)
* [Living StyleGuide (SASS/Markdown)](http://livingstyleguide.org/)
* [Tapestry Pattern Library](http://demos.pebbleroad.com/tapestry/)
* [Source.JS, node styleguide generator](http://sourcejs.com/)
* [Styleguide.io Resources](http://styleguides.io/)

We are not going to do anything that complicated. I just want you to have an idea of the colors and webfonts you would like to use, and a willingness to plan for this prior to working on your final projects.

#### Resources

1. [Perception Concerns](https://github.com/tmcw/perception)
2. [Gestalt Theory](http://emeeks.github.io/gestaltdataviz/section1.html)
3. [Color Brewer](http://colorbrewer2.org/)
4. [Geocolor](http://geocolor.io/)
5. [Color Hexa](http://www.colorhexa.com/)
6. [Flat UI Colors](http://flatuicolors.com/)
7. Rune.js - a project developed out of the ITP program and ["Printing Code"](http://printingcode.runemadsen.com/), another course you should totally check out!