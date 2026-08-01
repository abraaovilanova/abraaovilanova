import './Window.css';

function Window({ title, content }) {
  return (
    <div className='window'>
      <div className='window-title'>
        <div className='window-title-left'>
          <img src={process.env.PUBLIC_URL + '/images/terminal.png'} alt='Terminal' width='2%' />
          <h3>{title}</h3>
        </div>
        <span>_ □ X</span>
      </div>
      <div className='window-content'>{content}</div>
    </div>
  );
}

export default Window;
