import { useForm } from 'react-hook-form';

function SearchBar({ handleSearchQueryChange }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        handleSearchQueryChange(data.searchQuery);
    };

    return (
        <div className="flex justify-center items-center p-3">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-center w-full max-w-md p-2">
                <input type="text" id="searchQuery" name="searchQuery" placeholder="Rechercher" {...register('searchQuery')} className="w-full sm:flex-1 border border-gray-300 rounded-lg sm:rounded-r-none px-4 py-2 mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-primary transition-all"/>
                <button type="submit" className="w-full sm:w-auto bg-primary text-white py-2 px-4 rounded-lg sm:rounded-l-none hover:bg-secondary transition-colors duration-300">
                    Rechercher
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
