import React from "react";
import "./sass/main.scss";
import Modal from "react-modal";

const renderStack = stack =>
  stack.map(v => (
    <div class="stack--item" key={v}>
      {v}
    </div>
  ));

const renderTechs = techs =>
  techs.map(v => (
    <div className="modal_techs_item" key={v}>
      {v}
    </div>
  ));

const renderDemoLink = url => {
  if (url)
    return (
      <a
        href={url}
        className="modal__links__anchor modal__links__anchor--demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        DEMO
      </a>
    );
};

const renderImage = data => {
  if (data.image) {
    return (
      <>
        <img
          src={require(`./img/${data.image}`)}
          className="modal__image"
          alt=""
        />
      </>
    );
  } else {
    return (
      <div
        style={{
          fontSize: "10rem",
          margin: "auto"
        }}
      >
        NO IMAGE
      </div>
    );
  }
};

const renderNote = note => {
  if (note) {
    return <div className="modal__projectNote">*{note}</div>;
  }
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(50, 50, 50, 0.75)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#191a1d",
    padding: "0"
  }
};

Modal.setAppElement("#root");

const Card = props => {
  const { data } = props;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    return null;
  }

  function closeModal() {
    setIsOpen(false);
  }

  // <div className="project__card--stack">
  //   <div className="stack--label">Stack</div>
  //   {renderStack(data.stack)}
  // </div>
  return (
    <>
      <div className="project__card" onClick={openModal}>
        <div className="project__card--name">{data.name}</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="project__card__modal flex-row">
          <div className="modal__imageContainer">{renderImage(data)}</div>
          <div className="modal__content__container flex-column">
            <div className="modal__name">{data.name}</div>
            <div className="modal__techs_container">
              {renderTechs(data.techs)}
            </div>
            <div className="modal__about__header">ABOUT</div>
            <div className="modal__about__content">{data.about}</div>
            <div>{renderNote(data.note)}</div>
            <div className="modal__links">
              {renderDemoLink(data.demoLink)}
              <a
                href={data.codeLink}
                className="modal__links__anchor modal__links__anchor--code"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODE
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
