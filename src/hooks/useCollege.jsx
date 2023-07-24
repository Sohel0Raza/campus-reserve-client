import { useQuery } from "@tanstack/react-query";

const useCollege = () => {
    const {refetch,data: colleges = [], isLoading: loading,} = useQuery({
        queryKey: ["colleges"],
        queryFn: async () => {
            const res = await fetch(
                "https://campus-reserve-server-smoky.vercel.app/colleges"
            );
            console.log(res)
            return res.json();
        },
    });
    return [colleges, loading, refetch];
};

export default useCollege;