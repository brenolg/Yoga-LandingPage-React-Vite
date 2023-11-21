import styled from 'styled-components';

const PricesContainer = styled.section`
background: var(--C5);

.prices_section {
  color: var(--C4);
  margin: auto;
}

.section-main-title{
  color: var(--C1);
}

.main_container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 3rem;
}

.card_container {
  border-radius: 2.5rem;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  position: relative;
  flex-direction: column;
  z-index: 1;
  justify-content: space-between;
  max-width: 34rem;
}

.premium {
  background: var(--C4);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 2.5rem;
  color: var(--C1);
  position: relative;
}

.notPremium {
  background: var(--C2);
}

.mensal{
  background: var(--C5);
}

.title_container {
  align-items: flex-end;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1.6rem;
}

.title_container h4 {
  padding-bottom: 0.7rem;
}

.price {
  align-items: center;
  background: var(--c-3, #8ca09a);
  display: flex;
  font-family: syne , ivy , sans-serif;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  justify-content: center;
  text-align: center;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.6rem;
}

.button {
  background: var(--C4);
  border: 3px solid transparent;
  border-radius: var(--radius-radius-full);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  margin: 4rem 3rem;
}

.button:hover {
  background-color: inherit;
  border: 3px solid var(--C3);
  color: var(--C4);
}

.premium .button {
  background: var(--C4, #123939);
  color: var(--C1);
}

.premium .button:hover {
  background: var(--C1, #EFEFEF);
  color: var(--C4);
}

/* Mudanças black */

.premium {
  background: var(--C1, #EFEFEF);
  color: var(--C4, #123939);
}

.mensal {
  border: 2px solid var(--C2, #C9D3D0);
  background: var(--C5);
  color: var(--C2, #C9D3D0);
}

.button {
  font-family: Arial;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
}

.mensal .price {
  background: var(--C5);
  border: 1px solid var(--C2, #C9D3D0);
  height: 100px;
}

.anual .price {
  background: var(--C1, #EFEFEF);
  color: var(--C5);
}

.mensal .button {
  background: var(--C1, #EFEFEF);
  color: var(--C5);
}

.price {
  height: 100px;
}

.premium .price {
  background: var(--C2, #C9D3D0);
}

.mensal .button:hover {
  background: transparent;
  color: var(--C1, #EFEFEF);
  border-color: var(--C1, #EFEFEF);
}

.anual {
  background: var(--c-250, rgba(201, 211, 208, 0.50));
  color: var(--C1, #EFEFEF);
}

.anual .button {
  background: var(--C1, #EFEFEF);
  color: var(--C5);
}

.anual .button:hover {
  background: transparent;
  color: var(--C1, #EFEFEF);
  border-color: var(--C1, #EFEFEF);
}

.buttonCard a{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.buttonSpan {
  width: 100%;
}

.buttonCard  {
  height: 65px;
  padding: 0 1.6rem;
  display: flex;
  line-height: 1.3;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

@media screen and (max-width: 1127px) {
  .notPremium{
    height: 100%;
  }

  .main_container {
    justify-content: space-around;
    align-items: center;
  }

  .premium {
    max-width: 45rem;
  }

  .premium .list {
    gap: 1.8rem;
  }

  .notPremium .list {
    gap: 0.2rem;
  }
}

@media screen and (max-width: 850px) {
  .premium {
    max-width: 50%;
    width: 50%; 
  }

  .notPremium{
    max-width: 45%;
    width: 45%;
  }
}
@media screen and (max-width: 700px) {
  .premium {
    max-width: 100%;
    width: 100%; 
  }

  .notPremium{
    max-width: 100%;
    width: 100%;
  }
}

@media screen and (max-width: 420px) {
  .premium .price-title {
    font-size: 3.8rem;
  }
}

@media screen and (max-width: 380px) {
  .premium .price-title {
    font-size: 3.2rem;
  }
}

@media screen and (max-width: 350px) {
  .premium .price-title {
    font-size: 2.8rem;
  }

  .premium .price-sub-title {
    font-size: 2rem;
    padding-bottom: 0.2rem;
  }
}
`;

export default PricesContainer;
