import { useState } from "react";
import { CardData } from "../../types/Card";
import { styled } from "styled-components";

interface CardFormProps{
    onCreate:(newcard:CardData) => void;
}

const FormWrapper = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 6px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CardForm:React.FC<CardFormProps>=({onCreate})=>{
    const [title,setTitle] = useState(""); 
    const [description,setDescription] = useState("");
    const [imageUrl,setImageUrl] = useState("");
    const [category,setCategory] = useState("");

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();

        if(!title || !description || !imageUrl || !category){
            alert("Please fill all fields");
            return;
        }

        const newCard: CardData = {
            id: Date.now(),
            title,
            description,
            imageUrl,
            category
        };
        
        // Call the onCreate function passed from the parent component
        // This will add the new card to the list in the parent component
        onCreate(newCard);
        console.log("onCreate called", newCard);

        // Reset form fields
        setTitle("");
        setDescription("");
        setImageUrl("");
        setCategory("");

        console.log({ title, description, imageUrl, category });
        console.log("Form submitted");

    };

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e:any) => setTitle(e.target.value)} 
            />
            <Textarea 
                placeholder="Description" 
                value={description} 
                onChange={(e:any) => setDescription(e.target.value)} 
            />
            <Input 
                type="text" 
                placeholder="Image URL" 
                value={imageUrl} 
                onChange={(e:any) => setImageUrl(e.target.value)} 
            />
            <Input 
                type="text" 
                placeholder="Category" 
                value={category} 
                onChange={(e:any) => setCategory(e.target.value)} 
            />
            <Button type="submit">Create Card</Button>
        </FormWrapper>
    );
};

export default CardForm;
