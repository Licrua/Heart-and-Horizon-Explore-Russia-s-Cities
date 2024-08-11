import { useAppDispatch } from '@store/hooks';
import { motion } from 'framer-motion';
import { setGreetingButtonPress } from '@slices/cities';

type MainGreetingTextType = {
  styles: CSSModuleClasses;
};

function MainGreetingText({ styles }: MainGreetingTextType) {
  const dispatch = useAppDispatch();
  const onGrettingTogglerHandler = () => {
    dispatch(setGreetingButtonPress(true));
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      className={styles.content}
    >
      <h1>Добро пожаловать на сайт о городах России</h1>
      <div className={styles.font}>
        <p>
          <strong>
            Я рад приветствовать вас в мире, где величественные горы встречаются
            с бескрайними равнинами, где каждый город хранит свои уникальные
            традиции и историю. Здесь вы сможете узнать больше о великой стране,
            которая объединяет в себе удивительное разнообразие культур,
            природных богатств и удивительных людей.
          </strong>
        </p>
        <p>
          Пусть ваше путешествие по страницам нашего сайта откроет перед вами
          новые горизонты и даст возможность увидеть Россию с самых неожиданных
          сторон.{' '}
          <em>
            Исследуйте, вдохновляйтесь и открывайте для себя все грани этой
            великой страны.
          </em>
        </p>
        <p>Приятного вам времяпровождения!</p>
      </div>
      <button
        onClick={onGrettingTogglerHandler}
        type="button"
        className="btn btn-light"
      >
        Начать знакомство
      </button>
    </motion.div>
  );
}
export default MainGreetingText;
