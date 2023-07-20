import { HomeWrap, HomeTitle, HomeDescription } from './Home.styled';

const Home = () => {
  return (
    <HomeWrap>
      <HomeTitle>Phonebook App</HomeTitle>
      <HomeDescription>
        This app was created for educational purposes only. It allows you to
        create, delete and store contacts including name and phone number. You
        can also filter your contacts by name. Please, do not store your real
        contacts.
      </HomeDescription>
    </HomeWrap>
  );
};

export default Home;
