import  styled  from 'styled-components';

export const ContainerTransition = styled.div `
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing:0.5 rem;
    }

    th{
        color:#969CB2;
        font-weight:400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td{
        padding: 1rem 2rem;
        border:0;
        background:var(--shape);
        font-weight:400;
        color:#969CB2;
        border-radius: 0.25rem;

        &:first-child{
            color:var(--text-titles);
        }

        &.deposit{
            color:#33CC95;
        }

        &.withdraw{
            color:var(--red);
        }
    }
`

