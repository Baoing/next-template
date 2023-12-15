import Card from '@/components/Card/index';

import styles from './index.module.scss';

type ArticleCardProps = {
  title?: string;
  img?: string;
  content?: string;
};

const ArticleCard = (props: ArticleCardProps) => {
  const { title, img, content } = props;

  return (
    <Card noPadding className={'mb-5'}>
      <div className={'flex'}>
        <div className={styles.imgBox}>
          <img src={img} alt={title} />
        </div>
        <div className={'w-[60%] p-4'}>
          <h3 className={'text-lg font-semibold'}>{title}</h3>
          <div className={'mt-2 text-slate-400'}>{content}</div>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;
