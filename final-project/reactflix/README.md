<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="src/assets/react.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">react&chill</h3>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://apper-frontend-course-f0du52xad-kenharvey-delacruz.vercel.app/)

🎬 About react&Chill

react&Chill is my tribute to my joy of films (movies and series!) and the remarkable user experience of the Netflix platform. As a cinephile, I've always been fascinated by the way content is presented on Netflix. I tried to recreate the iconic look and feel of the Netflix website using React. My only goal was to mirror the aesthetic elements of Netflix and integrate some cool (for me) functionalities. These include the trailer preview option to give you a glimpse of how the movie flows, before fully diving into it. The read more option should (note: SHOULD @\_@) include more information about the film, but wasn't completed on time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

I am really not sure about what I used for this project except that Youtube and ChatGPT helped me a lot to make this a reality. From my understanding, the tools/frameworks (?) that I used are only React and Vite. So here's a picture of Vite and React.

![React-Vite Screen Shot][react-vite-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Landing page:
The landing page '/' gets redirected to the popular page. The popular page shows on a slideshow the 10 currently popular movies based on the API. Each page is shown for 5 seconds before moving on to the next movie, and then goes back to the first movie after the tenth.

![popular]

Top rated page:
The top rated page shows on a slideshow the 10 currently top rated movies based on the API. Each page is shown for 5 seconds before moving on to the next movie, and then goes back to the first movie after the tenth.

![toprated]

Upcoming page:
The upcoming page shows on a slideshow the 10 currently upcoming movies based on the API. Each page is shown for 5 seconds before moving on to the next movie, and then goes back to the first movie after the tenth. Shown here also is the footer

![upcoming]

Trailer modal:
The trailer modal opens up by clicking on the watch trailer button. Once clicked, a popup window appears of the youtube link of the movie's trailer. You can play the trailer directly on the site and once you close it, it stops playing also (took me a while to make this work @\_@)

![trailer]

TOS page:
The TOS page shows the terms of services of react&chill... directly copied from Netflix. My goal here was just to implement the linking of the footer to another page. The contact us and about us are empty/not created.....

![tos]

Read more page:
The read more page opens up by clicking on the read more button, which should (note: SHOULD, but not working...yet) take you to another page that shows more information about the movie. The router should be working (I think), and I just need to create a read more implementation.

![read-more]

Mobile & Tablet:
I also tried implementing a mobile and tablet layout for my website. Here's how it looks

![mobile]

![tablet]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Setup scss files
- [x] Configure API
- [x] Create router
- [x] Make Header
- [x] Make Buttons
- [x] Create Modals
- [x] Create Slideshow (Hero-Slide)
- [x] Make Footer
- [x] Mobile & Tablet layout
- [ ] Make read more page
- [ ] Make home page for searching
- [ ] Create movie list to integrate with searching
- [ ] Create movie cards for the movie list

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Youtube...](youtube.com)
- [ChatGPT...](chat.openai.com/)
- [Stack Overflow...](stackoverflow.com)
- [TMDB API](https://www.themoviedb.org)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: src/assets/screenshots/popular.png
[react-vite-screenshot]: src/assets/screenshots/vite-react.png
[read-more]: src/assets/screenshots/notfound.png
[popular]: src/assets/screenshots/popular.png
[tos]: src/assets/screenshots/tos.png
[toprated]: src/assets/screenshots/toprated.png
[upcoming]: src/assets/screenshots/upcoming.png
[trailer]: src/assets/screenshots/trailer.png
[mobile]: src/assets/screenshots/mobile.png
[tablet]: src/assets/screenshots/tablet.png
