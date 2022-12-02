import { FormStyled, Label, Input, Button } from "./ContactForm.style";
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';


export const ContactForm = () => {
  const [addMaterial] = useAddContactMutation();
const { data: contacts } = useGetContactsQuery()
    const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value
    const phone = form.elements[1].value
    const contact = {
       name, phone 
      };
      try {
              if (contacts?.map((({name}) => name.toLowerCase())).includes(name.toLowerCase())) {
       alert(`${name} is already in contacts.`)
              } else {
              addMaterial(contact)       
      }
      } catch (error){
        console.log(error);
      }
          form.reset();
    }  
      
    return (
   <FormStyled onSubmit={handleSubmit}>
 <Label htmlFor="name">Name
   <Input
  type="text"
   name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required             
      />
    </Label>
     <Label htmlFor="number">Number
   <Input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required        
      />
      </Label>
    <Button type='submit'>Add contact</Button>
    </FormStyled>
    )
    }


   
     
   