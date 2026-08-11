import './Folder.css';

function Folder() {
  return (
    <div className='folder'>
      <header className='folder-header'>
        <div>
          <span>Main Menu</span>
        </div>
      </header>
      <div className='folder-content'>
        <div className='folder-ui'>
          <header className='folder-ui-header'>
            <h3>abraão Vila Nova</h3>
          </header>
          <div className='folder-ui-content'>
            <ul className='folder-ui-list'>
              <li>1. Portfolio / CV</li>
              <li>2. Blog</li>
              <li>3. Personal Projects</li>
              <li>4. Youtube Chanel</li>
              <li>5. Games</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className='folder-footer'>
        <p>Type number, or use arrows, then press ENTER</p>
      </footer>
    </div>
  );
}

export default Folder;
