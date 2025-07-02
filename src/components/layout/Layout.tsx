import styled from "styled-components";

interface LayoutProps{
    children:React.ReactNode;
}

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 1erm;
`;

const Layout:React.FC<LayoutProps> = ({children}) =>{
    return <Container>{children}</Container>;
}

export default Layout;