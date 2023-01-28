import PropTypes from 'prop-types';
import { Container } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{children}</div>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};