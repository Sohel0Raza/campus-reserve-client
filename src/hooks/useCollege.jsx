import { useQuery } from "@tanstack/react-query";

const useCollege = () => {
    const { refetch, data: colleges = [], isLoading: loading } = useQuery({
        queryKey: ["colleges"],
        queryFn: async () => {
            const res = await fetch(
                "http://localhost:5005/colleges"
            );
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        },
    });

    return [colleges, loading, refetch];
};

export default useCollege;
