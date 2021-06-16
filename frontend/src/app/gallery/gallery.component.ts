import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  Items: any;
  lazyTargets: any;
  ngOnInit() {
    this.apiService.getImage().subscribe((result: any) => {
      this.Items = result.data.collections.edges;
      console.log(this.Items);
    });

    // this.lazyTargets = document.querySelectorAll(".lazy-loading");
    // console.log(this.lazyTargets);
    // this.lazyTargets.forEach(lazyTarget => this.lazyLoad(lazyTarget));
  }

  lazyLoad(target: Element) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          img.setAttribute("src", src || '');
          img.classList.add("fadeIn");
          observer.disconnect(); //entry.target
        }
      });
    });
    obs.observe(target);
  }
}