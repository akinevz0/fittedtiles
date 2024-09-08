import './App.css';
import BottomBar from './components/BottomBar.tsx';
import RenderingSection from './components/RenderingSection.tsx';
import SideBar from './components/SideBar.tsx';
import MainSection from './components/MainSection.tsx'
import Card from './components/Card.tsx'

const App = () => {
  // return <section className='h-full w-full flex'>
  //   <div className='place-self-center text-center text-3xl w-full'>
  //     Under Construction
  //   </div>
  // </section>

  return <>
    <section className='h-full w-full flex'>
      <SideBar>
        <Card title='Hello world'>
          <div> Test </div>
        </Card>
        <Card title='Is square?'>
          <input id='isSquare' type='checkbox' /> <label htmlFor='isSquare'> yes </label>
        </Card>
        <Card title='Dimensions'>
          <input id='width' type='number' /> <label htmlFor='width'> width </label> <br />
          <input id='height' type='number' /> <label htmlFor='height'> height </label>
        </Card>
        <Card title='Dimensions'>
          <input id='width' type='number' /> <label htmlFor='width'> width </label> <br />
          <input id='height' type='number' /> <label htmlFor='height'> height </label>
        </Card>
        <Card title='Dimensions'>
          <input id='width' type='number' /> <label htmlFor='width'> width </label> <br />
          <input id='height' type='number' /> <label htmlFor='height'> height </label>
        </Card>
        <Card title='Dimensions'>
          <input id='width' type='number' /> <label htmlFor='width'> width </label> <br />
          <input id='height' type='number' /> <label htmlFor='height'> height </label>
        </Card>
        <Card title='Dimensions'>
          <input id='width' type='number' /> <label htmlFor='width'> width </label> <br />
          <input id='height' type='number' /> <label htmlFor='height'> height </label>
        </Card>
      </SideBar>
      <MainSection >
        <RenderingSection />
        <BottomBar >
          <Card title='Component 1' />
          <Card title='Component 1' />
          <Card title='Component 1' />
          <Card title='Component 1' />
          <Card title='Component 1' />
          <Card title='Component 1' />
        </BottomBar>
      </MainSection>
    </section></>
};

export default App;