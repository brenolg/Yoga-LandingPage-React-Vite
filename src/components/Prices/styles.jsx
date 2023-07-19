import styled from 'styled-components';

const PricesContainer = styled.section`
background: var(--C2-50p);

.prices_section {
  color: var(--C4);
  margin: auto;
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
  flex-direction: column;
  justify-content: space-between;
  max-width: 34rem;
}

.premium {
  background: var(--C4);
  border-radius: 2.5rem;
  box-shadow: 4px 4px 50px 0 var(--C4);
  color: var(--C1);
}

.notPremium {
  background: var(--C2);
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

.price-title {
  font-family: ivy , syne , sans-serif;
  font-size: 3.8rem;
  font-style: normal;
  font-weight: 400;
}

.price {
  align-items: center;
  background: var(--c-3, #8ca09a);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
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
  margin: 4rem;
  padding: var(--spacing-s-2) 0;
}

.button:hover {
  background-color: inherit;
  border: 3px solid var(--C3);
  color: var(--C4);
}

.premium .button {
  background: var(--C1);
  color: var(--C4);
}

.premium .button:hover {
  background: var(--C4);
  color: var(--C1);
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

@media screen and (max-width: 744px) {
  .premium {
    width: 100%;
  }

  .notPremium{
    width: 100%;
  }
}
`;

export default PricesContainer;
