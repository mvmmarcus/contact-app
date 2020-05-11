import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
  render() {
    const { contacts, searchFilter, filter, loading } = this.props;

    return (
      <>
        <div data-testid="contacts" className="container">
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
			{loading && <span className="msg msg--loading" >Loading...</span>}
            {contacts &&
              contacts
                .filter((data) => {
                  if (searchFilter === "" || filter === "") return data;
                  if (
                    data[filter]
                      .toLowerCase()
                      .includes(searchFilter.toLowerCase())
                  )
                    return data;

                  return null;
                })
                .map((item) => <Contact key={item.id} data={item} />)}
          </section>
        </div>
      </>
    );
  }
}

export default Contacts;
