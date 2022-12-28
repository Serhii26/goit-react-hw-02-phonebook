
// import { nanoid } from 'nanoid';
// import { Container } from './Contact.styled';
// import PropTypes from 'prop-types';

// export const Contact = ({ contacts, deleteContact }) => {
//   return (
//     <Container>
//       {
//           contacts.map(contact => {
//               return (
//                   <ul key={contact.id}>
//                       <li>
//                     {contact.name}: {contact.number}
//                     <button 
//                             type="button"
//                             onClick={() => {deleteContact(contact.id) }}> Delete</button>
//                       </li>
                      
//                   </ul>
                  
//               );
//           })}
          
//      </Container>
//   );
// };

// Contact.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onClick: PropTypes.func.isRequired,
// };


// import { Container } from 'components/App.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Button, Li, Ul } from './Contact.styled';

export const Contact = ({ contacts, onClick }) => {
  return (
    <Ul>
      {contacts.map(contact => {
        return (
          <Li key={nanoid()}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <Button
              type="button"
              onClick={() => {
                onClick(contact.id);
              }}
            >
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
