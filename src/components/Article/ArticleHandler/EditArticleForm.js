import { updateArticle } from "../../../services/articleService";
import { formDataBuilder } from "../../../utils/constants/formDataBuilder";
import { useAuth } from "../../../context/AuthContext";
import ArticleForm from "../../../common/Articles/ArticleForm";

function EditArticleForm({ article, setArticle, cancelEdit }) {
    const { token } = useAuth();

    const handleEdit = async (data) => {
        const formData = formDataBuilder(data);
        const result = await updateArticle(article._id, formData, token);
        setArticle(result.article);
        cancelEdit();
    };

    return (
        <ArticleForm initialValues={article} onSubmit={handleEdit} submitLabel="Mettre à jour" cancelEdit={cancelEdit} title="Édition de la préstation"/>
    );
}

export default EditArticleForm;
