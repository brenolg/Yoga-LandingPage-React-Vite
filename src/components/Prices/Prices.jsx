import React from 'react';
import PriceCard from './PriceCard';
import PricesContainer from './styles';

const pro = true;
export default function Prices({ isTabletAndMobile }) {
  return (
    <PricesContainer id="prices">

      <div className="prices_section main-section">
        <h4 className="text-3xl title">
          Planos e preços:
        </h4>

        <div className="main_container">

          {
          isTabletAndMobile
            ? (
              <>
                <PriceCard
                  isPro={pro}
                  title="iClub Pro"
                  subTitle="(anual)"
                  price="R$ 160,00/mês"
                  link="https://pay.hotmart.com/J71174272X?off=yxz27hdf&bid=1688599747445"
                  list={[
                    'Acesso as aulas AO VIVO 2x por semana',
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e   lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento recorrente, 12x de R$160 (não compromete o limite do cartão)',
                  ]}
                />

                <PriceCard
                  isPro={false}
                  title="iClub"
                  subTitle="anual"
                  price="R$ 39,90/mês"
                  link="https://pay.hotmart.com/J71174272X?off=sghdkt84&bid=1688599677773"
                  list={[
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento parcelado, até 12x de R$39,90',
                  ]}
                />

                <PriceCard
                  isPro={false}
                  title="iClub"
                  subTitle="mensal"
                  price="R$ 69,90/mês"
                  link="https://pay.hotmart.com/J71174272X?off=4o7gr397"
                  list={[
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento mensal',
                  ]}
                />
              </>
            ) : (
              <>
                <PriceCard
                  isPro={false}
                  title="iClub"
                  subTitle="anual"
                  price="R$ 39,90/mês"
                  link="https://pay.hotmart.com/J71174272X?off=sghdkt84&bid=1688599677773"
                  list={[
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento parcelado, até 12x de R$39,90',
                  ]}
                />

                <PriceCard
                  isPro={pro}
                  title="iClub Pro"
                  subTitle="(anual)"
                  price="R$ 160,00/mês"
                  link="https://pay.hotmart.com/J71174272X?off=yxz27hdf&bid=1688599747445"
                  list={[
                    'Acesso as aulas AO VIVO 2x por semana',
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e   lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento recorrente, 12x de R$160 (não compromete o limite do cartão)',
                  ]}
                />

                <PriceCard
                  isPro={false}
                  title="iClub"
                  subTitle="mensal"
                  price="R$ 69,90/mês"
                  link="https://pay.hotmart.com/J71174272X?off=4o7gr397"
                  list={[
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento mensal',
                  ]}
                />
              </>
            )
          }
        </div>
      </div>
    </PricesContainer>
  );
}
