import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import Title from '../../components/Title';
import './MainMenu.css';

function MainMenu() {
  return (
    <div className='container mx-auto flex flex-col h-screen justify-center'>
      <Title />
      <Button text={"Match"}/>
      <Button text={"Compare"}/>
    </div>
  );
}

export default MainMenu;
