import styled from 'styled-components';

const AccessContainer = styled.section`
background: var(--C2-50p);

.access_section {
  color: var(--C4);
  margin: auto;
  padding-bottom: 6rem;
}

.title {
  padding: 3.7rem  0;
  margin: auto;
}

.main_container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 3rem;
  margin: auto;
}

.sub_container {
  align-items: center;
  background: var(--C2);
  border-radius: 16px;
  flex-shrink: 0;
  padding: 10px 13px;
  text-align: center;
  max-width: 20%;
  padding-bottom: 2rem;
  margin-bottom: 6rem;
}

.sub_container img {
  border-radius: 16px;
  width: 100%;
  margin-bottom:2rem;
}

/* Tablet */
@media screen and (max-width: 1127px) {
  .sub_container {
    max-width: 35%;
    margin: auto;
    margin-bottom: 3rem;
  }
}

@media screen and (max-width: 744px) {
  .sub_container {
    max-width: 75%;
    margin-bottom: 1.6rem;
  }
}

`;

export default AccessContainer;
