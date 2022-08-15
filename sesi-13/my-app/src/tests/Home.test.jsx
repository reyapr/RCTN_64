import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"
import { BrowserRouter, Routes, Route} from 'react-router-dom'


describe('Home Test' , () => {
    it('should render text "Learn Testing on React App"', () => {
        render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )
        
        const title  = screen.getByText('Learn Testing on React App')
        expect(title).toBeInTheDocument()
    })
    
    it('should render button Go To User List', () => {
        render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
        expect(btn).toHaveTextContent('Go To User List')
    })
    
    it('should change the page to user page', () => {
        render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        
        const backToHomeText = screen.getByText('Back To Home')
        expect(backToHomeText).toBeInTheDocument()
    })
})