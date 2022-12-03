import PropTypes from 'prop-types';
import { Section, Title } from './Statistic.styled';

export default function Statistic({ title, children }) {
   return (
      <Section>
         {title && <Title>{title}</Title>}
         {children}
      </Section>
   );
}

Statistic.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
};
