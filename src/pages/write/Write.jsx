import './write.css';

export default function Write() {
  return (
    <div className="write">
        <img 
            className="write__img"
            src="https://picsum.photos/900/600" 
            alt="" 
        />
        <form action="" className="write__form">
            <div className="write__formGroup">
                <label htmlFor="fileInput">
                    <i className="write__icon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="write__input" autoFocus={true} />
            </div>
            <div className="write__formGroup">
                <textarea placeholder="Tell your story..." type="text" className="write__input write__text"></textarea>
            </div>
            <button className="write__submit">Publish</button>
        </form>
    </div>
  )
}
