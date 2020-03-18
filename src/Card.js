import React from "react";
import "./sass/main.scss";
import Modal from "react-modal";

const renderStack = stack =>
  stack.map(v => (
    <div className={"stack__items__item stack__items__item--" + v} key={v}>
      {v}
    </div>
  ));

const renderTechs = techs =>
  techs.map(v => (
    <div className="modal__techs__item" key={v}>
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
        <img src={require(`./img/${data.image}`)} className="modal__image" />
      </>
    );
  } else {
    return (
      <div
        style={{
          fontSize: "5rem",
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

  // <div className="project__card__content--stack">
  //   <div className="stack--label">Stack</div>
  //   {renderStack(data.stack)}
  // </div>

  return (
    <>
      <div className="project__card" onClick={openModal}>
        <div className="project__card__name">{data.name}</div>
        <div className="project__card__info">
          <div className="project__card__leftSide">
            <div className="project__card__imageContainer">
              {renderImage(data)}
            </div>
          </div>

          <div className="project__card__rightSide">
            <div className="stack__header">STACK</div>
            <div className="stack__items">{renderStack(data.stack)}</div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="project__modal">
          <button className="project__modal__close" onClick={closeModal}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
              class="svg-inline--fa fa-times fa-w-11"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                class=""
              />
            </svg>
          </button>
          <div className="modal__imageContainer">
            <span className="helper"></span>
            {renderImage(data)}
          </div>
          <div className="modal__content__container flex-column">
            <div className="modal__name">{data.name}</div>
            <div className="modal__techs__container">
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
