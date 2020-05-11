import React from "react";
import { format } from "date-fns";

class Contact extends React.Component {
  render() {
    const { data } = this.props;

    const formatedDate = new Date(data.admissionDate);

    return (
      <article data-testid="contact" key={data.id} className="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt={data.name} />
        </span>
        <span data-testid="contact-name" className="contact__data">
          {data.name}
        </span>
        <span data-testid="contact-phone" className="contact__data">
          {data.phone}
        </span>
        <span data-testid="contact-country" className="contact__data">
          {data.country}
        </span>
        <span data-testid="contact-date" className="contact__data">
          {format(formatedDate, "dd/MM/yyyy")}
        </span>
        <span data-testid="contact-company" className="contact__data">
          {data.company}
        </span>
        <span data-testid="contact-department" className="contact__data">
          {data.department}
        </span>
      </article>
    );
  }
}

export default Contact;
