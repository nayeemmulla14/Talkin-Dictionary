const dictionaryA = {
    "a (an)": "one; any; each",
    "able": "having the power to do something",
    "about": "almost ('about half'); of or having a relation to ('We talk about the weather.')",
    "above": "at a higher place",
    "abuse": "bad treatment causing harm or injury",
    "accept": "to agree to receive",
    "accident": "something that happens by chance or mistake; an unplanned event",
    "accuse": "to say a person is responsible for an act or crime; to make a statement against someone",
    "across": "from side to side; to the other side",
    "act": "to do something",
    "activist": "one who seeks change through action",
    "actor": "someone acting in a play or show",
    "add": "to put (something) with another to make it larger; to say more",
    "administration": "the executive part of a government, usually headed by a president or prime minister",
    "admit": "to accept ('admitted to the United Nations'); to express one’s guilt or responsibility ('He admitted that what he did was wrong.')",
    "adult": "a grown person",
    "advertise": "to show or present the qualities of a product to increase sales",
    "advise": "to help with information, knowledge or ideas in making a decision",
    "affect": "to produce an effect on; to influence ('A lack of sleep affected the singer’s performance.')",
    "afraid": "feeling fear",
    "after": "later; behind",
    "again": "another time; as before",
    "against": "opposed to; not agreeing with something",
    "age": "how old a person or thing is",
    "agency": "an organization that is part of a larger group ('an agency of the United Nations')",
    "aggression": "an attack against a person or country; the violation of a country’s borders",
    "ago": "of time past; before now",
    "agree": "to have the same belief as someone; to be willing to do something",
    "agriculture": "farming",
    "aid": "to help; to support; help, assistance",
    "aim": "to point a gun at; a goal or purpose",
    "air": "the mixture of gases around the earth, mostly nitrogen and oxygen, that we breathe",
    "air force": "a military organization using airplanes",
    "airplane": "a vehicle with wings that flies",
    "airport": "a place where airplanes take off and land",
    "album": "a collection of recorded music"
};


const dictionaryB = {
    "baby": "n. a newly born creature",
    "back": "n. the part behind the front; ad. the other way from forward",
    "bacteria": "n. living things that are one cell and can be seen only through a microscope; some cause disease",
    "bad": "ad. wrong; acting against the law; not good",
    "balance": "v. to make two sides or forces equal",
    "ball": "n. something round",
    "balloon": "n. a device of strong, light material that rises when filled with gas lighter than air",
    "ballot": "n. a piece of paper used for voting",
    "ban": "v. to not permit; to stop; n. an official restriction",
    "bank": "n. an organization that keeps and lends money",
    "bar": "v. to prevent or block",
    "barrier": "n. anything that blocks or makes an action difficult",
    "base": "n. a military center; v. to establish as a fact ('Her research was based on experiments.')",
    "banal": "so lacking in originality as to be obvious and boring.",
    "bane": "a cause of great distress or annoyance.",
    "banish": "to send someone away from a country or place as an official punishment.",
    "barrage": "a concentrated artillery bombardment over a wide area.",
    "barren": "too poor to produce much or any vegetation.",
    "barter": "exchange goods or services for other goods or services without using money.",
    "battle": "a fight between opposing armed forces",
    "be": "to live; to happen; to exist",
    "beat": "to hit again and again",
    "beauty": "that which pleases the eye, ear or spirit",
    "because": "for the reason that (“He left because he was sick.”)",
    "become": "to come to be",
    "bed": "a sleeping place",
    "before": "earlier",
    "begin": "to do the first part of an action; to start",
    "behavior": "the way in which a person or animal acts (“The child’s behavior was bad because he fought with other children.”)",
    "behind": "at the back of; in back of",
    "believe": "to think; to feel sure of; to accept as true; to trust",
    "belong": "to be owned by; to be a member of",
    "below": "lower than",
    "best": "the most good",
    "betray": "to turn against; to be false to",
    "better": "more good than",
    "between": "in the space or time that separates; from one to the other (“talks between two nations”)",
    "big": "of great size; not small",
    "bill": "a legislative proposal",
    "biology": "the scientific study of life or living things in all their forms",
    "bird": "a creature that flies"
    // Add more words starting with 'B'
};

// Continue creating dictionaries for each letter of the alphabet
// ...

const dictionaries = {
    'a': dictionaryA,
    'b': dictionaryB,
    // Add entries for other letters
    // 'c': dictionaryC,
    // 'd': dictionaryD,
    // ...
};

function speakWord() {
    const word = document.getElementById('wordInput').value.toLowerCase();
    lookUpAndSpeakWord(word);
}

function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const word = event.results[0][0].transcript.toLowerCase();
        document.getElementById('wordInput').value = word;
        lookUpAndSpeakWord(word);
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error detected: ' + event.error);
    };
}

function lookUpAndSpeakWord(word) {
    const firstLetter = word[0];
    const dictionary = dictionaries[firstLetter] || {};
    const definition = dictionary[word] || "Definition not found.";

    const msg = new SpeechSynthesisUtterance();
    msg.text = `${word}. ${definition}`;
    window.speechSynthesis.speak(msg);

    document.getElementById('definition').innerText = definition;
}
