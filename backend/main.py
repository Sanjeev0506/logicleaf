from fastapi import FastAPI, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base, Contact

Base.metadata.create_all(bind=engine)

app = FastAPI()

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/contact")
def submit_contact(form: ContactForm, db: Session = Depends(get_db)):
    contact = Contact(**form.dict())
    db.add(contact)
    db.commit()
    db.refresh(contact)
    return {"message": "Contact saved"}
