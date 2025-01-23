import React from 'react'

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            style={{ width: "100%", height: "250px", "object-fit": "cover" }}
            src={imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <b> {author}</b> on <b>{new Date(date).toGMTString()}</b>{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-primary"
              target="_blank"
              rel="noreferrer"
              style={{
                "background-color": "teal",
                "border-color": "teal",
                "font-weight": 400,
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

