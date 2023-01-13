import { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";

const Home = () => {
  return (
    <div className="page-container">
      <p className="loading">[under construction]</p>
      <ScrollToTop showUnder={160}>
        <img src="img/btn/stt.png" />
      </ScrollToTop>
      <div id="lipsum">
        <h3>
          Topic example: t/cooking, t/coding, t/football. User example: u/user.{" "}
        </h3>
        <p>
          When done, this page will be similar to reddit, with a main section
          and sidebar. The main section will have a create post widget, and a
          complete module to view and sort a list of all articles, by default
          sorted by most recently added. The sidebar section will have a mini
          user profile section, a topics selector / topics menu, and a Latest
          comments widget!
        </p>
        <br />
        <h5>
          Lipsum placeholder text below (see bottom right corner after scrollin
          down to test Scroll To Top button )
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pulvinar eget mauris sed consequat. Cras imperdiet luctus consectetur.
          Sed eget quam ac augue lacinia dictum nec vitae metus. Aenean commodo,
          leo et hendrerit cursus, leo nisl vehicula nunc, non dictum augue
          justo eu ante. Sed convallis mi et convallis viverra. Aliquam finibus
          libero quis ligula interdum, in imperdiet nulla semper. Quisque at
          eleifend ante, et gravida est. Suspendisse non orci commodo, venenatis
          ex sit amet, consequat lectus. Nullam nec diam non leo volutpat
          egestas. In auctor sagittis rutrum. Phasellus est leo, tincidunt nec
          justo ut, ullamcorper tincidunt nisl. Donec tristique est ac tortor
          mattis, eget facilisis dolor vehicula. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Praesent mattis volutpat interdum. Aliquam erat volutpat. Etiam eget
          orci eu sapien mollis luctus ac euismod mauris. Suspendisse vel
          bibendum lacus. Donec scelerisque in urna a ornare. Duis pharetra arcu
          et interdum posuere. Vivamus eleifend sapien eu massa porttitor, vitae
          tempor turpis consequat. In pretium ultricies est, sit amet volutpat
          metus accumsan eu. Curabitur nec justo massa. Sed et fringilla odio.
          Aenean rutrum, eros sed scelerisque vestibulum, tellus ante eleifend
          sapien, et elementum augue augue nec ante. Nullam aliquam purus id
          convallis vulputate. Praesent eget scelerisque metus, vel convallis
          lacus. Donec non tellus sed risus pharetra volutpat.
        </p>
        <p>
          Cras tempor at augue eget mollis. Duis suscipit id tortor ut pharetra.
          Praesent in orci nec elit dapibus fringilla nec eu justo. Sed vitae
          diam nisl. Cras accumsan lacus at faucibus faucibus. Suspendisse in
          lorem varius, lacinia arcu sed, venenatis tellus. Sed fringilla
          vehicula massa vitae aliquam. Sed vulputate orci nec tortor pretium
          vehicula. Maecenas hendrerit purus ligula, eget congue ipsum porta sit
          amet. Quisque a est fringilla, porttitor justo sed, ultricies lectus.
          Duis a velit bibendum, suscipit purus eget, volutpat libero. Ut
          condimentum pellentesque quam, quis tincidunt est volutpat eu.
        </p>
        <p>
          Ut convallis accumsan interdum. Phasellus dictum accumsan luctus. Sed
          feugiat mi lorem, in sollicitudin ligula sollicitudin nec. Phasellus
          nec ante et arcu commodo eleifend. Mauris placerat dolor nec nisi
          sodales viverra. Morbi blandit elementum lectus, ut laoreet purus
          ultrices rhoncus. Sed feugiat tortor vel condimentum rutrum.
          Vestibulum quis pharetra urna. Quisque sit amet est pretium, tincidunt
          quam pulvinar, pulvinar libero.
        </p>
        <p>
          Morbi quis ipsum vulputate, vestibulum ipsum et, congue felis.
          Praesent maximus ut magna non tempor. Ut a metus finibus, finibus mi
          ut, fermentum mauris. Sed nec fringilla neque. Cras placerat a elit
          nec feugiat. Etiam fermentum purus sit amet leo pellentesque volutpat.
          Duis augue nunc, dapibus in est in, porta aliquet odio. Aenean
          lobortis risus quis nisl consequat, eget auctor felis placerat.
          Praesent eget lorem metus. Sed quis nisl nunc. Nunc maximus justo nec
          lacus dictum dapibus. Proin in lacinia tortor. Integer id fringilla
          enim.
        </p>
      </div>
    </div>
  );
};

export default Home;
