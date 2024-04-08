import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';
import App from '../../App';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test("Teste para a inserção de dois comentários", () => {
        const {debug}=render(<App/>)
        fireEvent.change(screen.getByTestId("comments-textarea"), { 
            target:{
                value: 'First comment'
            }
        })
        fireEvent.click(screen.getByTestId('button-comment'))
        expect(screen.getByText('First comment')).toBeInTheDocument()
        fireEvent.change(screen.getByTestId("comments-textarea"), { 
            target:{
                value: 'Second comment'
            }
        })
        fireEvent.click(screen.getByTestId('button-comment'))
        expect(screen.getByText('Second comment')).toBeInTheDocument()
        expect(screen.queryAllByTestId('post-comment')).toHaveLength(2)
        debug()
    })
});
