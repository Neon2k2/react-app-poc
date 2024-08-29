import { render, screen, fireEvent } from '@testing-library/react';
import CreateProductForm from '../Components/CreateProductForm';
import { BrowserRouter } from "react-router-dom";

test('Create product form data', async () => {
    await render(
     <BrowserRouter>
       <CreateProductForm />
     </BrowserRouter>);
   
     const titleLabel = screen.getByLabelText(/Title/i)
     expect(titleLabel).toBeInTheDocument();
     
     fireEvent.change(titleLabel, {target: {value: "Laptop"}})
     expect(titleLabel.value).toBe("Laptop");
     
     const categoryLabel = screen.getByLabelText(/Category/i)
     expect(categoryLabel).toBeInTheDocument();
     
     fireEvent.change(categoryLabel, {target: {value: "Electrical"}})  
     expect(categoryLabel.value).toBe("Electrical");

     const descriptionLabel = screen.getByLabelText(/Description/i)
     expect(descriptionLabel).toBeInTheDocument();
     
     fireEvent.change(descriptionLabel, {target: {value: "Lorem ispum"}})  
     expect(descriptionLabel.value).toBe("Lorem ispum");

     const priceLabel = screen.getByLabelText(/Price/i)
     expect(priceLabel).toBeInTheDocument();
     
     fireEvent.change(priceLabel, {target: {value: "40000"}})  
     expect(priceLabel.value).toBe("40000");
   
     const ratingLabel = screen.getByLabelText(/Rating/i)
     expect(ratingLabel).toBeInTheDocument();
     
     fireEvent.change(ratingLabel, {target: {value: "3"}})  
     expect(ratingLabel.value).toBe("3");

     const countLabel = screen.getByLabelText(/Count/i)
     expect(countLabel).toBeInTheDocument();
     
     fireEvent.change(countLabel, {target: {value: "3"}})  
     expect(countLabel.value).toBe("3");

     const submitButton = screen.getByRole("button",'Submit');
     expect(submitButton).toBeInTheDocument();
});
