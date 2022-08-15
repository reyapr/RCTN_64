/* eslint-disable testing-library/no-container */
import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import User from "../pages/User"
describe('User Component Test', () => {
    it('should render User Component', () => {
        render(<User/>)
        
        const btnBackToHomeText = screen.getByText('Back To Home')
        expect(btnBackToHomeText).toBeInTheDocument()
    })
    
    it('should render data from jsonplaceholder', async () => {
        render(<User/>)
        
        const userNames = await waitFor(() => {
            return screen.getAllByRole('username')
        })
        const names = userNames.map(e => e.innerHTML)
        
        expect(names).toContain('Name: Ervin Howell')
    })
})