import styled from 'styled-components';

const OnlineClassesMainContainer = styled.section`
    display: flex;
    height: 386px;
    padding: 8px 76px var(--spacing-s3, 24px) 76px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    background-color: var(--C2);
    position: relative;

.online-classes-title {
    color: var(--C4);
    font-family: syne, ivy, sans-serif;
    color: var(--C4, #123939);
    /* text-3xl */
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px; /* 137.143% */
}
#wrapper {
    width: 100%;
}
#carousel {
    position: relative;
    display: flex;
    overflow: hidden;
    gap: 24px;
}
.return-button, .forward-button {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 47%;
    border-radius: var(--radius-radius-full, 360px);
    background: var(--C3, #8CA09A);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
    }
}
.return-button{
    position: absolute;
    left: 5.6rem;
    transform: translateY(-50%);
    img{
        margin-right: 3px;
    }
}
.forward-button  {
    right: 5.6rem;
    transform: translateY(-50%);
    img{
        transform: rotate(180deg);
        margin-left: 3px;
    }
}
.counter {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
    position: relative;
    z-index: 99;
}
.counter-circle {
    transition: background-color 0.3s;
    width: 12px;
    height: 12px;
    background: var(--C4);
    border-radius: 50%;
}
`;

export default OnlineClassesMainContainer;
