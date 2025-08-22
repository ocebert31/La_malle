import { createArticles } from "../services/articleService";
import { formDataBuilder } from "../utils/constants/formDataBuilder";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ArticleForm from "../common/Articles/ArticleForm";

function NewArticlePage() {
    const { token } = useAuth();
    const navigate = useNavigate();

    const handleCreate = async (data) => {
        await createArticles(formDataBuilder(data), token);
        navigate("/services");
    };

    return (
        <ArticleForm onSubmit={handleCreate} submitLabel="Ajouter la préstation" title="Publier une préstation"/>
    );
}

export default NewArticlePage;
