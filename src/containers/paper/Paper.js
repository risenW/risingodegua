import React from "react";
import "./Paper.css";
import PaperCard from "../../components/paperCard/PaperCard";
import { paperSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Papers() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="research">
      <div className="blog-header">
        <h1 className="blog-header-text">{paperSection.title}</h1>
        <p className="subTitle blog-subtitle">{paperSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {paperSection.blogs.map(blog => {
            return (
              <PaperCard
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
