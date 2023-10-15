const ContentArea = () => {
    return (
        <div className="col-span-2 bg-zinc-400 rounded opacity-50 grid grid-cols-2">
            <div className="w-full overflow-hidden"> {/* Adjust the height as needed */}
                <img
                    src={process.env.PUBLIC_URL + '/senior_headshot.jpg'}
                    alt="mike"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-white font-semibold p-5"> 
                Everything that you thought had meaning: every hope, dream, or moment of happiness. None of it matters as you lie bleeding out on the battlefield. None of it changes what a speeding rock does to a body, we all die. But does that mean our lives are meaningless? Does that mean that there was no point in our being born? Would you say that of our slain comrades? What about their lives? Were they meaningless?... They were not! Their memory serves as an example to us all! The courageous fallen! The anguished fallen! Their lives have meaning because we the living refuse to forget them! And as we ride to certain death, we trust our successors to do the same for us! Because my soldiers do not buckle or yield when faced with the cruelty of this world! My soldiers push forward! My soldiers scream out! My soldiers RAAAAAGE!
            </div>
        </div>
    );
};
export default ContentArea;
