import { List, ListItem, StyledLink, Container } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <nav>
        <List>
          <li>
            <StyledLink to={'/'}>Home</StyledLink>
          </li>
          <ListItem>
            <StyledLink to={'/movies'}>Movies</StyledLink>
          </ListItem>
        </List>
      </nav>
    </Container>
  );
};

export default Header;
