import React from "react";
import Image from "react-bootstrap/Image";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";

function LightGalleryStream() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom, lgAutoplay]}
    >
      <div
        data-responsive="https://images.unsplash.com/photo-1549997965-a0cb188487f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 375, https://images.unsplash.com/photo-1549997965-a0cb188487f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 480, https://images.unsplash.com/photo-1549997965-a0cb188487f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 800"
        data-src="https://images.unsplash.com/photo-1549997965-a0cb188487f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1549997965-a0cb188487f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <a id="startlightgallery" onclick="ExistingLogic()" href="">
          {" "}
        </a>
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 375, https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 480, https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 800"
        data-src="https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80 375,https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80 480, https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80 800"
        data-src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 375,https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 480, https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 800"
        data-src="https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 375,https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 480, https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 800"
        data-src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1508407576665-2d9a5d638a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80 375,https://images.unsplash.com/photo-1508407576665-2d9a5d638a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80 480, https://images.unsplash.com/photo-1508407576665-2d9a5d638a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80 800"
        data-src="https://images.unsplash.com/photo-1508407576665-2d9a5d638a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1508407576665-2d9a5d638a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 375,https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 480, https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 800"
        data-src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1561240055-102e7eaa2961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 375,https://images.unsplash.com/photo-1561240055-102e7eaa2961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 480, https://images.unsplash.com/photo-1561240055-102e7eaa2961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 800"
        data-src="https://images.unsplash.com/photo-1561240055-102e7eaa2961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1561240055-102e7eaa2961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1541538670337-c53313ad7c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 375,hhttps://images.unsplash.com/photo-1541538670337-c53313ad7c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 480, https://images.unsplash.com/photo-1541538670337-c53313ad7c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 800"
        data-src="https://images.unsplash.com/photo-1541538670337-c53313ad7c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1541538670337-c53313ad7c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1525442045200-0b22c8c869c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 375,https://images.unsplash.com/photo-1525442045200-0b22c8c869c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 480, https://images.unsplash.com/photo-1525442045200-0b22c8c869c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 800"
        data-src="https://images.unsplash.com/photo-1525442045200-0b22c8c869c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1525442045200-0b22c8c869c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1617725145063-56958eadf557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 375,https://images.unsplash.com/photo-1617725145063-56958eadf557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 480, https://images.unsplash.com/photo-1617725145063-56958eadf557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 800"
        data-src="https://images.unsplash.com/photo-1617725145063-56958eadf557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1617725145063-56958eadf557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 375,https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 480, https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 800"
        data-src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1550155864-3033f844da36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 375,https://images.unsplash.com/photo-1550155864-3033f844da36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 480, https://images.unsplash.com/photo-1550155864-3033f844da36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 800"
        data-src="https://images.unsplash.com/photo-1550155864-3033f844da36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1550155864-3033f844da36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1563808599816-a9e266f941b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3ZWRkaW5nJTIwY291cGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60 375,https://images.unsplash.com/photo-1563808599816-a9e266f941b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3ZWRkaW5nJTIwY291cGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60 480, https://images.unsplash.com/photo-1563808599816-a9e266f941b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3ZWRkaW5nJTIwY291cGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60 800"
        data-src="https://images.unsplash.com/photo-1563808599816-a9e266f941b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3ZWRkaW5nJTIwY291cGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1563808599816-a9e266f941b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3ZWRkaW5nJTIwY291cGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 375,https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 480, https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 800"
        data-src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1513084012612-05b28297d5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 375,hthttps://images.unsplash.com/photo-1513084012612-05b28297d5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 480, https://images.unsplash.com/photo-1513084012612-05b28297d5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 800"
        data-src="https://images.unsplash.com/photo-1513084012612-05b28297d5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1513084012612-05b28297d5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHdlZGRpbmclMjBjb3VwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1562860931-fdb2ab9aabea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 375,https://images.unsplash.com/photo-1562860931-fdb2ab9aabea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 480, https://images.unsplash.com/photo-1562860931-fdb2ab9aabea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 800"
        data-src="https://images.unsplash.com/photo-1562860931-fdb2ab9aabea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1562860931-fdb2ab9aabea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 375,https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 480, https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 800"
        data-src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1618566864264-fb013f791da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60 375,https://images.unsplash.com/photo-1618566864264-fb013f791da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60 480, https://images.unsplash.com/photo-1618566864264-fb013f791da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60 800"
        data-src="https://images.unsplash.com/photo-1618566864264-fb013f791da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1618566864264-fb013f791da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div
        data-responsive="https://images.unsplash.com/photo-1621621668101-d5c8329b3784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmclMjBjb3VwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60 375,https://images.unsplash.com/photo-1621621668101-d5c8329b3784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmclMjBjb3VwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60 480, https://images.unsplash.com/photo-1621621668101-d5c8329b3784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmclMjBjb3VwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60 800"
        data-src="https://images.unsplash.com/photo-1621621668101-d5c8329b3784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmclMjBjb3VwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        data-pinterest-text="Pin it"
        data-tweet-text="share on twitter"
      >
        <Image
          style={{ display: "none" }}
          className="img-responsive"
          src="https://images.unsplash.com/photo-1621621668101-d5c8329b3784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmclMjBjb3VwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        />
      </div>
    </LightGallery>
  );
}

export default LightGalleryStream;
