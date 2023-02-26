import tw, { styled } from 'twin.macro';
import { Button } from './components/Button';

function App() {
  return (
    <div className="flex flex-col">
      <h1>Hello World</h1>
      <Button label="test" />
      <ButtonStyled label="tw+styled" className="p-3" />
    </div>
  );
}

const ButtonStyled = styled(Button)`
  //tailwindcss
  ${tw`bg-blue-500 mt-5`}
`;

export default App;
