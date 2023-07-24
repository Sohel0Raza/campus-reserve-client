import { useQuery } from "@tanstack/react-query";

const useReview = () => {
    const {refetch,data: reviews = [], isLoading: loading,} = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await fetch(
                "https://campus-reserve-server-smoky.vercel.app/review"
            );
            console.log(res)
            return res.json();
        },
    });
    return [reviews, loading, refetch];
};

export default useReview;