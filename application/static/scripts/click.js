export async function click_create_questionnaire(quest) {
    const rep = await fetch('/quiz/api/v1.0/quiz',
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({"name": quest})
        });
    const json = await rep.json();
    console.log(json);
}